import axios from 'axios';


    export default axios.create({
            baseURL: 'https://www.googleapis.com/youtube/v3',
            params:{
                  part:'snippet',
                  maxResults:50,
                key:'AIzaSyAzuMyR78acVsjEjqYVWTOF4JS-MYfQkf8',
            }
        });

