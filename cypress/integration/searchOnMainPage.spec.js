import {MainSearchPage} from "pages/mainSearchPage";

describe('Search on main page google.com',()=>{
    it('search on main page',()=>{
        const SearchPage = new MainSearchPage();
        const valueToSearch = 'Вологда';
        SearchPage.search(valueToSearch)
            .checkFirstResult(valueToSearch);
    })
})
