import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import DiaryCard from '../components/DiaryCard';

import buketImage from '../../assets/moods/Buket.jpg';
import buket1Image from '../../assets/moods/BuketBiru.jpg';
import bungaImage from '../../assets/moods/BungaBagus.jpg';
import candidImage from '../../assets/moods/CandidBunga.jpg';
import mawarImage from '../../assets/moods/MawarBiru.jpg';
import sayangku from '../../assets/moods/Sayangku.jpg';

const diaryEntries = [
  {
    id: 1,
    title: 'Biru Itu Indah',
    date: '1995-05-11',
    preview: 'Langit Adalah Hal Yang Menenangkan',
    moodImage: buketImage, 
    moodType: 'happy',
  },
  {
    id: 2,
    title: 'Malam Yang Syahdu',
    date: '2002-05-27',
    preview: 'Malam Yang Indah Untuk Melamun',
    moodImage: buket1Image, 
    moodType: 'calm',
  },
  {
    id: 3,
    title: 'Lelah Dan Membosankan',
    date: '2005-04-28',
    preview: 'Semua Hal Di Dunia Ini Melelahkan',
    moodImage: bungaImage, 
    moodType: 'tired',
  },
  {
    id: 4,
    title: 'Jalan Yang Indah',
    date: '1989-09-14',
    preview: 'Setiap Menyusuri Jalan Ini Adalah Hal Yang Menyenangkan',
    moodImage: candidImage,
    moodType: 'happy',
  },
  {
    id: 5,
    title: 'Pelangi Disaat Yang Tepat',
    date: '1982-10-08',
    preview: 'Setiap Selesai Kesulitan Pasti Akan Ada Kemudahan',
    moodImage: mawarImage,
    moodType: 'calm',
  },
];

export default function DiaryListScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Section Header dengan Avatar */}
      <View style={styles.headerContainer}>
        <View>
          <Text style={styles.welcomeText}>Selamat Datang di,</Text>
          <Text style={styles.headerTitle}>Buku Harian Renci</Text>
        </View>
        <Image
          source={sayangku} // 
          style={styles.sayangku}
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
  sayangku: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#3b82f6',
  },
});