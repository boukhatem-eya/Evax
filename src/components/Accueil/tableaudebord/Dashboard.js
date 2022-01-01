import {useState} from 'react';

const Dash =()=>{
	const [sidebarOpen, setSidebarOpen] = useState(false);

	const openSidebar =()=>{
		setSidebarOpen(true);

	}

	const closeSidebar =()=>{
		setSidebarOpen(false);

	}

	return (
			<div className="container">
				<h1> React Dashbord</h1>
				
			</div>


		)

}
export default Dash