import axios from 'axios'

const searchImage = async (term) => {

    const response = await axios.get("http://api.unsplash.com/search/photos",{
        headers:{
            
        },
        params:{
            query : term,
            client_id : "QkiPBSyhZtR2RtFAcQMAIJ_4SFmSybuiZULnh587rSI",
            count : 30
            
        }
    });

    return response.data.results;
}

export default searchImage;