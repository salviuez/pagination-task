const list_items = [
    "Items 1",
     "Items 2",
     "Items 3",
     "Items 4",
     "Items 5",
     "Items 6",
     "Items 7",
     "Items 8",
     "Items 9",
     "Items 10",
     "Items 11",
     "Items 12",
     "Items 13",
     "Items 14",
     "Items 15",
     "Items 16",
     "Items 17",
     "Items 18",
     "Items 19",
     "Items 20",
     "Items 21",
     "Items 22",
     "Items 23"
       
];

const list_element = document.getElementById('list');
const pagination_element= document.getElementById('pagination');

let current_page = 2;
let rows = 6;


function DisplayList (items, wrapper, rows_per_page, page){
    wrapper.innerHTML = "";
    page--;
    
    let start = rows_per_page * page;
    let end = start + rows_per_page;
    let paginatedItems = items.slice(start, end);

    
	for (let i = 0; i < paginatedItems.length; i++) {
		let item = paginatedItems[i];

		let item_element = document.createElement('div');
		item_element.classList.add('item');
		item_element.innerText = item;
		
		wrapper.appendChild(item_element);
	}
}

function SetupPagination(items, wrapper, rows_per_page){
    wrapper.innerHTML = ""

    let page_count = Math.ceil(items.length / rows_per_page);
    for(let i=1; i<page_count + 1; i++){
        let btn = PaginationButton(i, items);
        wrapper.appendChild(btn);
    }
}

function PaginationButton(page, items) {
    let button = document.createElement('button');
    button.innerText = page;

    if (current_page == page) button.classList.add('active');
     
    button.addEventListener('click', function(){
    current_page  = page;
    DisplayList(items, list_element, rows, current_page);
    
    let current_btn = document.querySelector('.pagenumbers button.active');
    current_btn.classList.remove('active');
    button.classList.add('active');
    });


    return button;
}



DisplayList(list_items, list_element, rows, current_page);
SetupPagination(list_items, pagination_element, rows);
















