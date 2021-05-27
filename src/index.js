import React, { Fragment, Component } from 'react';
import { withRouter } from "react-router";
import ReactDOM from 'react-dom';
import './index.css';

// React router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Redux
import store from "./store";
import { Provider } from "react-redux";


// Components
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import ContactList from "./Components/ContactList/ContactList";
import NotFound from "./Components/NotFound/NotFound";
import About from "./Components/About/About";
import AddContact from "./Components/AddContact/AddContact";
import EditContact from "./Components/EditContact/EditContact";

// API
import { updateContacts, getAllContacts } from "./Services/api-service";

class App extends Component {

  state = {
    CurrentContact: null,
    findContact: ""
  }

  onDelete = (Id) => {
    const index = this.state.List.findIndex((elem) => elem.Id === Id);
    const partOne = this.state.List.slice(0, index);
    const partTwo = this.state.List.slice(index + 1);
    const tmpList = [...partOne, ...partTwo];
    this.setState({
      List: tmpList
    })
    updateContacts(tmpList);
  }

  onEdit = (Id) => {
    const index = this.state.List.findIndex((elem) => elem.Id === Id);
    const currentContact = this.state.List[index]
    this.setState({
      CurrentContact: currentContact
    })
  }

  onEditCurrentContact = (currentContact) => {
    const { Id } = currentContact;
    const index = this.state.List.findIndex((elem) => elem.Id === Id);
    const partOne = this.state.List.slice(0, index);
    const partTwo = this.state.List.slice(index + 1);
    const newList = [...partOne, currentContact, ...partTwo];
    this.setState({
      List: newList
    })
    updateContacts(newList);
  }


  searchName = (event) => {
    let searchName = event.target.value;
    this.setState({
      findContact: searchName
    });
  }

  onShowContact = (items, searchValue) => {
    if (searchValue.length === 0) {
      return items;
    }

    return items.filter(item => {
      return (
        item.Name.toLowerCase().indexOf(searchValue.toLowerCase()) > -1
      );
    });
  };


  render() {
    const showContacts = this.onShowContact(
      this.state.List,
      this.state.findContact
    );
    const { CurrentContact } = this.state;
    return (
      <Provider store={store}>
        <Router>
          <Header searchName={this.searchName} />
          <Switch>
            <Route path="/" exact render={() => <ContactList />} />
            <Route path="/about" exact component={About} />
            <Route path="/add-contact" exact render={() => <AddContact />} />
            <Route path="/edit-contact" exact render={() => <EditContact onEditCurrentContact={this.onEditCurrentContact} Contact={CurrentContact} />} />
            <Route component={NotFound} />
          </Switch>
        </Router>
        <Footer />
      </Provider>

    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"));