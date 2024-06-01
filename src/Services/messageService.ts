import Message from "../Models/Message";

export async function fetchMessagesData(isAdmin: boolean,accessToken:string|undefined): Promise<Message[]> {
    let url: string;
    let requestOptions;
    // if (isAdmin) {

        console.log("admin here")
        url = `${process.env.REACT_APP_API}/message/list`;
         requestOptions = {
            method: "GET",
            headers: {
                "content-type": "application/json"
            }
        }
    //} 
    // else {
    //     console.log("user here")
    //     url = `${process.env.REACT_APP_API}/message/listByEmail`;
    //     requestOptions = {
    //         method: "POST",
    //         headers: {
    //             Authorization: `Bearer ${accessToken}`,
    //             "Content-Type": "application/json"
    //         }
            
    //     }
    // }


    try {
        const response = await fetch(url, requestOptions);
        const responseJson = await response.json();

        const loadedMessages: Message[] = [];

        for (const key in responseJson) {
            loadedMessages.push({
                id: responseJson[key].id,
                name: responseJson[key].name,
                email: responseJson[key].email,
                message: responseJson[key].message     
            });
        }
        return loadedMessages;
    } catch (error) {
        console.error('Error fetching messaes data:', error);
        throw error;
    }

};