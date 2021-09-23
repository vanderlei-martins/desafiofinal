import React, { useEffect, useState } from "react";
import {
	View,
	Text,
	Image,
	Modal,
	TouchableOpacity,
	Button,
} from "react-native";

import { ViewCard, Name, ImgCharacter, ViewInfo, TextSpecies, TextLocation } from "./styles";

export default function Card({ data }) {
    
	return (
		<ViewCard>
			{/* <TouchableOpacity> */}
				<ImgCharacter source={{
                    uri: data.image
				}} />
			{/* </TouchableOpacity> */}
            <ViewInfo>
                <Name>{data.name} <TextSpecies>{data.species}</TextSpecies></Name>
                <TextLocation><Text style={{fontWeight: "bold"}}>Location</Text>: {data.location.name}</TextLocation>
            </ViewInfo>
		</ViewCard>
	);
}
