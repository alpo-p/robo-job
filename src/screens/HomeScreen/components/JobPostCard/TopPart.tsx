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
        resizeMode="stretch"
        style={stylesheet({ width }).imageBackground}
      >
        <IconButton
          iconName="chevron-back-circle-outline"
          onPress={navigateBackToSearch}
          color={styles.primaryColor}
          style={stylesheet({}).backIcon}
          size={50}
        />
        <Image style={stylesheet({}).logo} source={{ uri: jobPost.logoUrl }} />
        <LinearGradient
          style={{
            width: '100%',
            alignItems: 'center',
            position: 'absolute',
            bottom: 0,
            paddingBottom: 6,
            zIndex: 1,
          }}
          colors={[
            'transparent',
            'rgba(0,0,0,0.35)',
            'rgba(0,0,0,0.4)',
            'rgba(0,0,0,0.5)',
            'rgba(0,0,0,0.7)',
            'rgba(0,0,0,0.9)',
          ]}
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
    },
    backIcon: {
      alignSelf: 'flex-start',
      marginTop: 40,
      marginLeft: 8,
      marginBottom: 6,
    },
    logo: {
      height: 112,
      width: 112,
      borderRadius: 56,
      borderWidth: 1,
      borderColor: 'white',
      alignSelf: 'center',
    },
  })
