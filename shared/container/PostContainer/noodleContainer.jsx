import _ from 'lodash';
import React, { PropTypes, Component } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { connect } from 'react-redux';
import * as Actions from '../../redux/actions/actions';

class NoodleContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      term: ""
    };
    this.search = this.search.bind(this);
  }

  search(event) {
    this.setState({
      term: event.target.value
    })
    this.props.dispatch(Actions.search(event.target.value));
  }

  componentDidMount() {
    if(!this.props.results) {
      this.props.dispatch(Actions.search("mongoose"));
    }
  }

  render() {
    if (this.props.results) var results = this.props.results.map((el, i) => ( 
      <li className="list-group-item" key={i}>
        {el.title}
        <a href={el.url}>Visit</a>
      </li>
    ))
    const search = _.debounce((term) => { this.search(term) }, 3000);

    return (
      <div>
        <Header />
        <div className="container">
          <div className="input-group">
            <span className="input-group-addon" id="basic-addon1">Search Noodle</span>
            <input type="text" value={this.state.term} onChange={this.search} className="form-control" placeholder="What is mongoose?" />
          </div>
          <ul>{results}</ul>
        </div>
        <Footer />
      </div>
    );
  }
}

NoodleContainer.need = [() => { return Actions.search(); }];
NoodleContainer.contextTypes = {
  router: React.PropTypes.object,
};

function mapStateToProps(store) {
  return {
    results: store.results
  };
}

NoodleContainer.propTypes = {
  results: PropTypes.array.isRequired
};

export default connect(mapStateToProps)(NoodleContainer);
