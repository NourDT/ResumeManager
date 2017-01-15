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
  saveButton: {
    alignItems: 'center',
    fontSize: 20,
    margin: 14,
    color: '#21A9DC',
  },
  cardBase: {
    backgroundColor: 'white',
    padding: padding.mediumPadding
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  hrLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#b3b3b3',
    marginTop: padding.mediumPadding,
    marginBottom: padding.mediumPadding
  },
  pasteResumeTextInput: {
    backgroundColor: 'white',
    textAlign: 'left',
    textAlignVertical: 'top'
  },
  resumeSnippet: {
    marginBottom: padding.smallPadding
  }
});
