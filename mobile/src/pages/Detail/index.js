import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import { View, Image, TouchableOpacity, Text } from 'react-native';

import logo from '../../assets/logo.png';

import styles from './styles';

export default function Detail() {
	const navigation = useNavigation();

	function navigateBack() {
		navigation.goBack();
	}
	
	return(
		<View style={styles.container}>
			<View style={styles.header}>
				<Image source={logo} />
				
				<TouchableOpacity onPress={navigateBack}>
					<Feather name="arrow-left" size={28} color="#E02041" />
				</TouchableOpacity>
			</View>

			<View style={styles.incident}>
				<Text style={[styles.incidentProperty, { marginTop: 0 }]}>ONG:</Text>
				<Text style={styles.incidentValue}>APAD</Text>

				<Text style={styles.incidentProperty}>CASO:</Text>
				<Text style={styles.incidentValue}>Cadelinha atropelada</Text>
				
				<Text style={styles.incidentProperty}>VALOR:</Text>
				<Text style={styles.incidentValue}>R$ 120,00</Text>
			</View>

			<View style={styles.contactBox}>
				<Text style={styles.heroTitle}>Salve o dia!</Text>
				<Text style={styles.heroTitle}>Seja o herói desse caso.</Text>

				<Text style={styles.heroDescription}>Entre em contato:</Text>

				<View style={styles.actions}>
					<TouchableOpacity style={styles.action} onPress={() => {}}>
						<Text style={styles.actionText}>WhatsApp</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.action} onPress={() => {}}>
						<Text style={styles.actionText}>E-mail</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
}