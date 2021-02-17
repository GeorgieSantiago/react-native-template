if ! command -v yarn &> /dev/null
then
    echo "yarn could not be found"
    exit
fi
if ! yarn -v react-native &> /dev/null
then
    echo "react-native-cli could not be found"
    exit
fi
yarn && rm -rfd android && rm -rfd ios && react-native eject