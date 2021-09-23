import styled from "styled-components";

export const Background = styled.View`
	flex: 1;
	align-items: center;
	justify-content: center;
`;

export const ListCharacters = styled.FlatList`
	margin-top: 15px;
	width: 80%;
`;


export const ViewCard = styled.View`
	margin: 5px;
	flex-basis: 0;
	flex-grow: 1;
    align-items: center;
	/* justify-content: center; */
    /* border-width: 2px; */
    border-radius: 2px;
    flex-direction: row;
    background-color: rgba(255,255,255,0.5);
    
`;

export const ViewInfo = styled.View`
    margin-left: 16px;
    flex: 1;
`;

export const Name = styled.Text`
	color: #222;
	font-size: 18px;
	font-weight: bold;
`;

export const TextSpecies = styled.Text`
	color: #222;
	font-size: 10px;
`;

export const TextLocation = styled.Text`
	font-size: 13px;
`;

export const ImgCharacter = styled.Image`
	margin: 2px;
    margin-left: 15px;
    margin-top: 3px;
    width: 100px;
    height: 100px;
    border-radius: 80px;
    justify-content: flex-start;
`;
