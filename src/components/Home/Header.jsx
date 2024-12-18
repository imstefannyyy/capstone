import Pagination from "../utils/Pagination";
import Search from "../utils/Search";

function Header({search, pagination, view}) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid mx-lg-4 d-flex justify-content-between">
                <div className="w-25 d-flex justify-content-start align-items-center">
                    <div>
                        <input 
                            type="radio" 
                            id="listView" 
                            name="viewMode"
                            className="btn-check"
                            onClick={() => view.handleViewMode("list")}
                            defaultChecked={view.viewMode === "list"}
                        />
                        <label htmlFor="listView" className="btn btn-outline-light">
                            <i className="fas fa-list"></i>
                        </label>
                    </div>
                    <div className="ms-lg-2 ms-1">
                        <input 
                            type="radio"
                            id="tableView" 
                            name="viewMode" 
                            className="btn-check" 
                            onClick={() => view.handleViewMode("kanban")}
                            defaultChecked={view.viewMode === "kanban"}
                        />
                        <label htmlFor="tableView" className="btn btn-outline-light">
                            <i className="fas fa-table-cells"></i>
                        </label>
                    </div>
                </div>
                <Search {...search} />
                <Pagination {...pagination} />
            </div>
        </nav>
    )
}

export default Header;
