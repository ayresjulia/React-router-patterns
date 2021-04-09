import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar } from "reactstrap";

const Nav = ({ dogs }) => {
	return (
		<Navbar color="light">
			<NavLink to={"/dogs"}>Home</NavLink>
			{dogs.map((dog) => (
				<NavLink key={dog.name} to={`/dogs/${dog.name}`}>
					{dog.name}
				</NavLink>
			))}
		</Navbar>
	);
};

export default Nav;

// const Example = (props) => {
// 	const [ isOpen, setIsOpen ] = useState(false);

// 	const toggle = () => setIsOpen(!isOpen);

// 	return (
// 		<div>
// 			<Navbar color="light" light expand="md">
// 				<NavbarBrand href="/">reactstrap</NavbarBrand>
// 				<NavbarToggler onClick={toggle} />
// 				<Collapse isOpen={isOpen} navbar>
// 					<Nav className="mr-auto" navbar>
// 						<NavItem>
// 							<NavLink href="/components/">Components</NavLink>
// 						</NavItem>
// 						<NavItem>
// 							<NavLink href="https://github.com/reactstrap/reactstrap">
// 								GitHub
// 							</NavLink>
// 						</NavItem>
// 						<UncontrolledDropdown nav inNavbar>
// 							<DropdownToggle nav caret>
// 								Options
// 							</DropdownToggle>
// 							<DropdownMenu right>
// 								<DropdownItem>Option 1</DropdownItem>
// 								<DropdownItem>Option 2</DropdownItem>
// 								<DropdownItem divider />
// 								<DropdownItem>Reset</DropdownItem>
// 							</DropdownMenu>
// 						</UncontrolledDropdown>
// 					</Nav>
// 					<NavbarText>Simple Text</NavbarText>
// 				</Collapse>
// 			</Navbar>
// 		</div>
// 	);
// };
