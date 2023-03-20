import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { messagesList } from "../mockData";
import Picker from "emoji-picker-react";
//import ContactListComponent from "./components/ContactListComponent";
//import ConversationComponent from "./components/ConversationComponent";
//import httpManager from "../managers/httpManager";
import { SearchContainer,SearchInput } from "./ContactListComponent";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
  height: 100%;
  background:#f6f7f8;
`;
const ProfileHeader=styled.div`
display :flex;
flex-direction:row;
background:#ededed;
padding:10px;
align-items:center;
gap:10px;
`;
const ProfileImage=styled.div`
width:32px;
height:32px;
border-radius:50px;
`;
const chatBox=styled.div`
display:flex;
background:#f0f0f0;
padding:10px;
align-item:center;
bottom:0;

`;
const EmojiImage=styled.img`
width:28px;
height:28px;
opacity:0.4;
cursor:pointer;
`;
const MessageContainer=styled.div`
display:flex;
flex-direction:column;
height:100%;
overflow-y:auto;
`;
const MessageDiv=styled.div`
justify-content:${(props)=> (props.isYours ? "flex-end " : "flex-start")};
display:flex;
margin:5px 15px;
`;
const Message =styled.div`
justify-content:${(props)=> (props.isYours ? "#daf8cb" : "#000000")};
background:#daf8cb;
 max-width:50%;
 color:#303030;
 padding:8px 10px;
 font-size:14px;
`;

const ConversationComponent =(props)=>{
    const {selectedChat}=props;
    const [text,setText]=useState("");
     const [pickerVisible,togglePicker]=useState(false);
     //const [messagesList,setMessageList]=useState(messagesList);
    const onEmojiClick=(event,emojiObj)=>{
         setText(text + emojiObj.emoji)
         togglePicker(false);
    };
    const onEnterPress=(event)=>{
        if(event.key==="enter"){
 const messages=[...messagesList]
 messages.push({
    
        id: 0,
        messageType: "TEXT",
        text,
        senderID: 1,
        addedOn: "12:00 PM",
      
});
 //setMessageList(messages)
//  setText("");
         }
     };
    return <Container>
        <ProfileHeader>
        <ProfileImage src={selectedChat.profilepic}/>
           {selectedChat.name}
        </ProfileHeader>
        <MessageContainer>
            {messagesList.map((messageData)=>
            <MessageDiv isYours={messageData.senderID===0}>
            <Message isYours={messageData.senderID===0}>{messageData.text}</Message>
        </MessageDiv>
            )}
            
            
            
          
        </MessageContainer>
        <chatBox>
<SearchContainer>
    { pickerVisible && ( 
    <Picker 
    pickerStyle={{position:"absolute",bottom:"60px"}}
    onEmojiClick={onEmojiClick} />
    )}
    <EmojiImage src={"/emoji icon.jpg"}
     onClick={()=>togglePicker(!pickerVisible)}
    />
    <SearchInput  placeholder="Type a message" value={text} onKeyDown={onEnterPress} onChange={(e)=>setText(e.target.value)}/>
</SearchContainer>
        </chatBox>

    </Container>
};
export default ConversationComponent;