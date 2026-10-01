import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

const products = [
  { name: 'Everyday Tote', category: 'Accessories', price: '$28', color: '#dce9df', mark: '01' },
  { name: 'Studio Headphones', category: 'Tech', price: '$84', color: '#f1dfc9', mark: '02' },
  { name: 'Field Notes Set', category: 'Stationery', price: '$16', color: '#e8e2f0', mark: '03' },
  { name: 'Ceramic Cup', category: 'Home', price: '$32', color: '#f0d9d4', mark: '04' },
];

const categories = ['All', 'Accessories', 'Tech', 'Stationery', 'Home'];

export default function App() {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const visibleProducts = products.filter((product) => {
    const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
    const matchesQuery = product.name.toLowerCase().includes(query.trim().toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
      <StatusBar style="dark" />
      <View style={styles.topLine}>
        <Text style={styles.brand}>OBJECTS / 01</Text>
        <Text style={styles.edition}>INDEPENDENT GOODS</Text>
      </View>

      <View style={styles.intro}>
        <Text style={styles.kicker}>THE CONSIDERED COLLECTION</Text>
        <Text style={styles.title}>Good things,{ '\n' }found.</Text>
        <Text style={styles.description}>Useful objects for slower mornings and brighter ideas.</Text>
      </View>

      <View style={styles.student}>
        <Text style={styles.studentLabel}>PROJECT BY</Text>
        <Text style={styles.studentName}>Humair Naseer <Text style={styles.studentRoll}>/ 22i-2632</Text></Text>
      </View>

      <TextInput
        accessibilityLabel="Search products"
        placeholder="Search the collection"
        placeholderTextColor="#777b72"
        value={query}
        onChangeText={setQuery}
        style={styles.search}
        returnKeyType="search"
      />

      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.filters}>
        {categories.map((category) => {
          const selected = category === activeCategory;
          return (
            <Text
              key={category}
              accessibilityRole="button"
              accessibilityState={{ selected }}
              onPress={() => setActiveCategory(category)}
              style={[styles.filter, selected && styles.filterActive]}
            >
              {category}
            </Text>
          );
        })}
      </ScrollView>

      <View style={styles.sectionHeading}>
        <Text style={styles.sectionTitle}>Selected objects</Text>
        <Text style={styles.count}>{String(visibleProducts.length).padStart(2, '0')} ITEMS</Text>
      </View>

      <View style={styles.grid}>
        {visibleProducts.map((product) => (
          <View key={product.name} style={styles.product}>
            <View style={[styles.productImage, { backgroundColor: product.color }]}>
              <Text style={styles.productMark}>{product.mark}</Text>
              <Text style={styles.productGlyph}>{product.category === 'Tech' ? '◉' : product.category === 'Home' ? '◌' : product.category === 'Stationery' ? '▤' : '⌁'}</Text>
            </View>
            <Text style={styles.productCategory}>{product.category.toUpperCase()}</Text>
            <View style={styles.productMeta}>
              <Text style={styles.productName}>{product.name}</Text>
              <Text style={styles.price}>{product.price}</Text>
            </View>
          </View>
        ))}
        {visibleProducts.length === 0 && <Text style={styles.empty}>No objects found. Try another search.</Text>}
      </View>

      <Text style={styles.footer}>A SMALL STUDY IN EVERYDAY DESIGN · 2026</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#f7f6f1' },
  content: { paddingTop: 58, paddingHorizontal: 22, paddingBottom: 40 },
  topLine: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#d8d8cf', paddingBottom: 14 },
  brand: { color: '#1c3028', fontSize: 13, fontWeight: '800', letterSpacing: 1.1 },
  edition: { color: '#777b72', fontSize: 9, fontWeight: '700', letterSpacing: 1.2 },
  intro: { paddingTop: 34, paddingBottom: 22 },
  kicker: { color: '#ae573c', fontSize: 10, fontWeight: '800', letterSpacing: 1.5 },
  title: { color: '#1c3028', fontSize: 50, lineHeight: 52, fontWeight: '700', marginTop: 12 },
  description: { color: '#62675f', fontSize: 14, lineHeight: 21, marginTop: 12, maxWidth: 280 },
  student: { backgroundColor: '#e8ece4', paddingHorizontal: 14, paddingVertical: 11, marginBottom: 18 },
  studentLabel: { color: '#667065', fontSize: 9, fontWeight: '800', letterSpacing: 1.2 },
  studentName: { color: '#1c3028', fontSize: 13, fontWeight: '700', marginTop: 5 },
  studentRoll: { color: '#667065', fontWeight: '400' },
  search: { height: 46, backgroundColor: '#fff', borderWidth: 1, borderColor: '#d8d8cf', paddingHorizontal: 14, color: '#1c3028', fontSize: 14 },
  filters: { flexDirection: 'row', gap: 8, paddingTop: 14, paddingBottom: 25 },
  filter: { overflow: 'hidden', borderWidth: 1, borderColor: '#d8d8cf', paddingHorizontal: 13, paddingVertical: 8, color: '#535a51', fontSize: 11, fontWeight: '600' },
  filterActive: { backgroundColor: '#1c3028', borderColor: '#1c3028', color: '#fff' },
  sectionHeading: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline', borderBottomWidth: 1, borderBottomColor: '#d8d8cf', paddingBottom: 11, marginBottom: 14 },
  sectionTitle: { color: '#1c3028', fontSize: 20, fontWeight: '700' },
  count: { color: '#777b72', fontSize: 9, fontWeight: '700', letterSpacing: 1 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', rowGap: 22 },
  product: { width: '48%' },
  productImage: { aspectRatio: 0.92, justifyContent: 'space-between', padding: 12 },
  productMark: { color: '#536054', fontSize: 10, fontWeight: '700' },
  productGlyph: { color: '#1c3028', fontSize: 54, textAlign: 'center', fontWeight: '300' },
  productCategory: { color: '#9a5943', fontSize: 9, fontWeight: '800', letterSpacing: 1, marginTop: 10 },
  productMeta: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline', marginTop: 4, gap: 6 },
  productName: { color: '#1c3028', fontSize: 13, fontWeight: '600', flexShrink: 1 },
  price: { color: '#535a51', fontSize: 12 },
  empty: { color: '#62675f', paddingVertical: 24 },
  footer: { borderTopWidth: 1, borderTopColor: '#d8d8cf', marginTop: 32, paddingTop: 14, color: '#777b72', fontSize: 9, fontWeight: '700', letterSpacing: 1 },
});
