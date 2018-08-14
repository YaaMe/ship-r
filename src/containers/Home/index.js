import React from 'react';
import { connect } from 'react-redux';
import ReactMarkdown from 'react-markdown';
import { getActivity } from 'actions/home';

const mapStateToProps = ({ home }) => ({ home });
const mapDispatchToProps = dispatch => ({
  getActivity: () => dispatch(getActivity())
});

class Home extends React.Component {
  state = {
    input: '# loading...'
  }
  componentDidMount() {
    this.props.getActivity();
    // window.fetch('https://rawgit.com/YaaMe/ship-r/master/README.md')
    //       .then(res => res.text())
    //       .then(input => this.setState({input}))
  }
  render() {
    console.log(this.props.home);
    return (
      <div>
        <ReactMarkdown source={this.state.input}/>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
