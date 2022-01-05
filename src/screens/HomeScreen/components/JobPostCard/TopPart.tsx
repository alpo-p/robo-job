import { LinearGradient } from 'expo-linear-gradient'
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
        <LinearGradient
          style={{
            width: '100%',
            alignItems: 'center',
            position: 'absolute',
            bottom: 0,
            paddingBottom: 4,
          }}
          colors={['transparent', 'rgba(0,0,0,0.8)']}
        >
          <RoboText uppercase color={styles.white} size="large" weight="bold">
            {jobPost.companyName}
          </RoboText>
          <RoboText color={styles.white} size="large">
            {jobPost.jobTitle}
          </RoboText>
        </LinearGradient>
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
    textContainer: {},
  })
