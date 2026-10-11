import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import DiaryCard from '../components/DiaryCard';

import BuketImage from '../../assets/moods/BuketPink.jpg';
import DaintyImage from '../../assets/moods/DaintyDaydream.jpg';
import FlowersImage from '../../assets/moods/Flowersbouquet.jpg';
import JayantiImage from '../../assets/moods/JayantiBouquet.jpg';
import PinkImage from '../../assets/moods/PinkFlowers.jpg';
import AvatarRaina from '../../assets/moods/AvatarRaina.jpg';


const diaryEntries = [
  {
    id: 1,
    title: 'Awal yang Manis',
    date: '2026-10-01',
    preview: 'Langit Adalah Hal Yang Menenangkan',
    moodImage: BuketImage, 
    moodType: 'happy',
  },
  {
    id: 2,
    title: 'Hujan di Sore Hari',
    date: '2026-10-05',
    preview: 'Suara rintik hujan dan suasana redup hari ini benar-benar menenangkan pikiran.',
    moodImage: FlowersImage, 
    moodType: 'calm',
  },
  {
    id: 3,
    title: 'Tugas yang Menumpuk',
    date: '2026-10-08',
    preview: 'Rasanya energi ini terkuras habis setelah seharian menyusun laporan praktikum.',
    moodImage: DaintyImage, 
    moodType: 'tired',
  },
  {
    id: 4,
    title: 'Semangat Baru',
    date: '2026-10-11',
    preview: 'Hari ini aku mencoba hal baru dan rasanya sangat antusias untuk melihat hasilnya.',
    moodImage: JayantiImage,
    moodType: 'excited',
  },
  {
    id: 5,
    title: 'Isi Kepala yang Berisik',
    date: '2026-10-10',
    preview: 'Malam ini entah kenapa rasanya sulit tidur. Banyak hal yang berputar-putar di pikiran.',
    moodImage: PinkImage,
    moodType: 'anxious',
  },
];

export default function DiaryListScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Section Header dengan Avatar */}
      <View style={styles.headerContainer}>
        <View>
          <Text style={styles.welcomeText}>Selamat Datang di,</Text>
          <Text style={styles.headerTitle}>Buku Harian Raina</Text>
        </View>
        <Image
          source={AvatarRaina} // 
          style={styles.AvatarRaina}
        />
      </View>

      {/* Daftar Kartu Diary */}
      {diaryEntries.map((entry) => (
        <DiaryCard
          key={entry.id}
          title={entry.title}
          date={entry.date}
          preview={entry.preview}
          moodImage={entry.moodImage}
          moodType={entry.moodType}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  content: {
    padding: 16,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 8,
  },
  welcomeText: {
    fontSize: 14,
    color: '#6b7280',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#111827',
  },
  AvatarRaina: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#3b82f6',
  },
});