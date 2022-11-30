import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(categories: any, searchText: any): any {
    if(searchText == null || searchText == '') {
      return categories;
    } else {
      let filteredCategories = [];
      categories.filters(function(category){
        category.filters(function(subCategory, index) {
          //Search only by second criteria (in this case name)
          if(index == 1) {
            if(subCategory.toString().toLowerCase().indexOf(searchText.toLowerCase()) != -1) {
              if(filteredCategories.indexOf(subCategory) == -1) {
                filteredCategories.push(category);
              }
            }
          }
        });
      });
      return filteredCategories;
    }
  }
}
