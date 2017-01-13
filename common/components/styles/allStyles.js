import { StyleSheet } from 'react-native';

const padding = {
  smallPadding: 5,
  mediumPadding: 10
}

export default StyleSheet.create({
  sceneBase: {
    padding: padding.smallPadding
  },
  textButtonBlue: {
    color: 'white',
    backgroundColor: '#21A9DC',
    fontSize: 20,
    height: 40,
    textAlign: 'center',
    textAlignVertical: 'center'
  },
  cardBase: {
    backgroundColor: 'white',
    padding: padding.mediumPadding
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  cardBody: {
    
  },
  hrLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#b3b3b3',
    marginTop: padding.mediumPadding,
    marginBottom: padding.mediumPadding
  }
});
