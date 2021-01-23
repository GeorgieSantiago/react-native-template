import { storiesOf } from "@storybook/react";
import { Text } from "react-native";
import View from "./View";

storiesOf("Main View", module)
	.add("with text", () => (
        <View>
            <Text>Page Content Here</Text>
        </View>
    ))
