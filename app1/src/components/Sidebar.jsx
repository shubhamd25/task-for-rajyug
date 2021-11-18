import '../App.css'

function Sidebar() {
    return (
        
        <div className="container">
            <nav class="main-menu">
                <ul>
                    <li className="has-subnav">
                        <a href="#">
                            <i class="fas fa-th-large fa-2x"></i>
                            <span class="nav-text">
                                Dashboard
                            </span>
                        </a>

                    </li>
                    <li className="has-subnav">
                        <a href="#">
                            <i class="fas fa-user-plus"></i>
                            <span class="nav-text">
                                Sign Up
                            </span>
                        </a>

                    </li>
                    <li class="has-subnav">
                        <a href="#">
                            <i class="fas fa-user-friends"></i>
                            <span class="nav-text">
                                User
                            </span>
                        </a>

                    </li>
                    <li class="has-subnav">
                        <a href="#">
                            <i class="fas fa-calendar-alt"></i>
                            <span class="nav-text">
                                calendar
                            </span>
                        </a>

                    </li>
                    <li>
                        <a href="#">
                            <i class="fas fa-calendar-day"></i>
                            <span class="nav-text">
                                Graphs and Statistics
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="fas fa-user-friends"></i>
                            <span class="nav-text">
                                Quotes
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="fas fa-bars"></i>
                            <span class="nav-text">
                                Tables
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="fas fa-th"></i>
                            <span class="nav-text">
                                Maps
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="fas fa-copy"></i>
                            <span class="nav-text">
                                Documentation
                            </span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Sidebar;