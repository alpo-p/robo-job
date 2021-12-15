import React from 'react'
import { ImageBackground, StyleSheet, View, Image } from 'react-native'
import { JobPostCardProps } from '.'
import RoboText from '../../../../common/components/RoboText'
import styles from '../../../../common/styles'

const TopPart = ({ jobPost, width }: Omit<JobPostCardProps, 'height'>) => (
  <View style={stylesheet({}).topContainer}>
    <ImageBackground
      source={{ uri: jobPost.pictureUrl }}
      resizeMode="cover"
      style={stylesheet({ width }).imageBackground}
    >
      <Image style={stylesheet({}).logo} source={{ uri: jobPost.logoUrl }} />
      <View style={stylesheet({}).textContainer}>
        <RoboText color="primaryDark">{jobPost.companyName}</RoboText>
        <RoboText color="primaryDark" weight="light">
          {jobPost.jobTitle}
        </RoboText>
      </View>
    </ImageBackground>
  </View>
)

export default TopPart

const stylesheet = ({ height, width }: { height?: number; width?: number }) =>
  StyleSheet.create({
    wrapper: {
      flex: 1,
      flexDirection: 'column',
      height,
      backgroundColor: 'black',
    },
    topContainer: {
      marginTop: 4,
      height: 200,
    },
    imageBackground: {
      height: 200,
      width,
      alignItems: 'center',
    },
    logo: {
      height: 100,
      width: 100,
      borderRadius: 50,
      marginTop: 30,
    },
    textContainer: {
      backgroundColor: styles.lightGreyOpacity,
      alignItems: 'center',
    },
  })
