import React from 'react';
import utube from '../API/api';
import SearchBar from './searchBar';
import VideoList from './videoList';



class App extends React.Component{
  state={
         videos:[]
        }

onSearchSubmit = async (term) => {
      console.log(term); 
    const response = await utube.get('/search', {params: { q: term }}
    );
    console.log('app',response.data.items);
    this.setState({ videos: response.data.items });
} 

    render(){
        return(
            <div >
                <SearchBar onSubmitSearch={this.onSearchSubmit} />
                
                    <VideoList  Videos={this.state.videos} />
              

            </div>
        );
        }
}
export default App;
