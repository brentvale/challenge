export const asFilteredArray = ({ providersAndOrganizations, filters }) => {
	if(filters.searchQuery === ""){
		return {1:[]};
	}
	var re = new RegExp(filters.searchQuery, "i");
	var stringLength = filters.searchQuery.length;
	
	//with current list of elements to search through, element either has first_name or not
	//N
	var filteredArray = providersAndOrganizations.filter(obj => {
		if(obj.first_name){
			if(obj.first_name.slice(0,stringLength).match(re) || obj.last_name.slice(0,stringLength).match(re) || (obj.first_name + " " +  obj.last_name).slice(0,stringLength).match(re)){
				return obj;
			}
		} else {
			if(obj.organization_name.slice(0,stringLength).match(re)){
				return obj;
			}
		}
	});
	//combine multiple records 
	//N (total 2N)
	let combinedNamesHash = {}
	for(let i = 0; i < filteredArray.length; i ++){
		let combinedName;
		if(typeof filteredArray[i].first_name === "undefined"){
			combinedName = `${filteredArray[i].organization_name}`;
		} else {
			combinedName = `${filteredArray[i].first_name} ${filteredArray[i].last_name}`;
		}
		if(!combinedNamesHash[combinedName]){
			combinedNamesHash[combinedName] = [];
		} 
		combinedNamesHash[combinedName].push(filteredArray[i]);
	}
	
	//5 results per page
	//N (total 3N Runtime)
	let filteredHashByFives = {1:[]};
	let currentPage = 1;
	let counter = 0;
	for(let i in combinedNamesHash){
		if(counter !== 0 && counter % 5 === 0){
			filteredHashByFives[(counter/5)+1] = [];
			currentPage += 1;
		}
		filteredHashByFives[currentPage].push(combinedNamesHash[i]);
		
		counter += 1;
	}
	return filteredHashByFives;
}