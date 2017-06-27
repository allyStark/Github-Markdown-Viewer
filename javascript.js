var TextBox = React.createClass({
  
  getInitialState: function() {
    
    return {
      
      text: ""
      
    };
    
  },
  
  handleChange: function (event) {
    
    this.setState({text: marked(event.target.value)});
 
  },
  
  createMarkdown: function() {
    
    return {__html: this.state.text};
    
  },
  
  render: function() {
    
    return (
    
      <div>
      
      <br />  
        
      <h1 className="text-center"><strong>Github-Flavoured Markdown Previewer</strong></h1>
      
      <br />  
        
      <div className="row">
    
        <div className="col-md-6">
      
          <textarea onChange={this.handleChange}></textarea>
      
        </div>
    
        <div className="col-md-6 text-output" id="text-app" dangerouslySetInnerHTML={this.createMarkdown()}>
         
        </div>   
        
      </div>
      
      <br />  
        
      <div className="row">
        
        <div className="text-center message">A handy guide to markdown syntax can be found <a href="https://guides.github.com/features/mastering-markdown">here</a>. Enjoy!</div>
        
      </div>  
        
  </div>      
    
    )
    
  }
  
});

ReactDOM.render(<TextBox />, document.getElementById('app'));