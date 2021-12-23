import React from 'react'
import { ImageBackground, StyleSheet, View, Image } from 'react-native'
import { JobPostCardProps } from '.'
import IconButton from '../../../../common/components/IconButton'
import RoboText from '../../../../common/components/RoboText'
import styles from '../../../../common/styles'

const TopPart = ({ jobPost, width }: Omit<JobPostCardProps, 'height'>) => {
  const navigateBackToSearch = () => console.log('going back to search')

  return (
    <View style={stylesheet({}).container}>
      <ImageBackground
        source={{ uri: jobPost.pictureUrl }}
        resizeMode="cover"
        style={stylesheet({ width }).imageBackground}
      >
        <IconButton
          iconName="chevron-back-circle"
          onPress={navigateBackToSearch}
          color="white"
          style={stylesheet({}).backIcon}
        />
        <Image style={stylesheet({}).logo} source={{ uri: jobPost.logoUrl }} />
        <View style={stylesheet({}).textContainer}>
          <RoboText color="primaryDark" size="large">
            {jobPost.companyName}
          </RoboText>
          <RoboText color="primaryDark" weight="light" size="large">
            {jobPost.jobTitle}
          </RoboText>
        </View>
      </ImageBackground>
    </View>
  )
}

export default TopPart

const stylesheet = ({ width }: { height?: number; width?: number }) =>
  StyleSheet.create({
    container: {
      height: 280,
    },
    imageBackground: {
      height: 280,
      width,
      alignItems: 'center',
    },
    backIcon: {
      alignSelf: 'flex-start',
      marginTop: 40,
      marginLeft: 8,
    },
    logo: {
      height: 112,
      width: 112,
      borderRadius: 56,
      borderWidth: 1,
      borderColor: 'white',
    },
    textContainer: {
      backgroundColor: styles.lightGreyOpacity,
      alignItems: 'center',
    },
  })
