import React, { Component } from "react";
import { Dimensions, Image, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import Card from "../components/Card";
import Badge from "../components/Badge";
import Block from "../components/Block";
import Text from "../components/Text";
import Button from "../components/Button";
import { theme, mocks } from "../constants";
import { SvgXml } from 'react-native-svg'; 
import Header from '../components/Header';

const { width } = Dimensions.get("window");

import constructOutlineSvg from '../icon/construct-outline.svg';
import colorWandOutlineSvg from '../icon/brush-outline.svg';
import waterOutlineSvg from '../icon/build-outline.svg';
import oilOutlineSvg from '../icon/color-fill-outline.svg';
import carSportOutlineSvg from '../icon/sparkles-outline.svg';
import searchOutlineSvg from '../icon/briefcase-outline.svg';

class BrowseScreen extends Component {
  state = {
    active: "Products",
    categories: []
  };

  componentDidMount() {
    this.setState({ categories: this.props.categories });
  }

  handleTab = tab => {
    const { categories } = this.props;
    const filtered = categories.filter(category =>
      category.tags.includes(tab.toLowerCase())
    );

    this.setState({ active: tab, categories: filtered });
  };

  renderTab(tab) {
    const { active } = this.state;
    const isActive = active === tab;

    return (
      <TouchableOpacity
        key={`tab-${tab}`}
        onPress={() => this.handleTab(tab)}
        style={[styles.tab, isActive ? styles.active : null]}
      >
        <Text size={16} medium gray={!isActive} secondary={isActive}>
          {tab}
        </Text>
      </TouchableOpacity>
    );
  }

  render() {
    const { profile, navigation } = this.props;
    const { categories } = this.state;

    return (
      <Block>
        <Header /> 
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ paddingVertical: theme.sizes.base * 2 }}
        >
          <Block flex={false} style={styles.categoriesContainer}>
            <Block flex={false} row space="between" style={styles.categories}>
              {categories.map(category => (
                <TouchableOpacity
                  key={category.id}
                  onPress={() => navigation.navigate("Explore", { category })}
                >
                  <Card center middle shadow style={styles.category}>
                    <Badge
                      margin={[0, 0, 15]}
                      size={50}
                      color="rgba(41,216,143,0.20)"
                    >
                      {this.renderIcon(category.id)}
                    </Badge>
                    <Text medium height={20}>
                      {category.name}
                    </Text>
                    <Text gray caption>
                      {category.count} products
                    </Text>
                  </Card>
                </TouchableOpacity>
              ))}
            </Block>
          </Block>
        </ScrollView>
      </Block>
    );
  }

  // Function to render the appropriate SVG icon based on category id
  renderIcon(id) {
    switch (id) {
      case "repair":
        return <SvgXml xml={constructOutlineSvg} />;
      case "color_change":
        return <SvgXml xml={colorWandOutlineSvg} />;
      case "car_wash":
        return <SvgXml xml={waterOutlineSvg} />;
      case "oil_change":
        return <SvgXml xml={oilOutlineSvg} />;
      case "tire_service":
        return <SvgXml xml={carSportOutlineSvg} />;
      case "inspection":
        return <SvgXml xml={searchOutlineSvg} />;
      default:
        return null;
    }
  }
}

BrowseScreen.defaultProps = {
  profile: mocks.profile,
  categories: mocks.categories
};

export default BrowseScreen;

const styles = StyleSheet.create({
  tab: {
    marginRight: theme.sizes.base * 2,
    paddingBottom: theme.sizes.base
  },
  active: {
    borderBottomColor: theme.colors.secondary,
    borderBottomWidth: 3
  },
  categoriesContainer: {
    marginTop: theme.sizes.base * 11,
  },
  categories: {
    flexWrap: "wrap",
    paddingHorizontal: theme.sizes.base * 2,
    marginBottom: theme.sizes.base * 3.5
  },
  category: {
   
    minWidth: (width - theme.sizes.padding * 2.4 - theme.sizes.base) / 2,
    maxWidth: (width - theme.sizes.padding * 2.4 - theme.sizes.base) / 2,
    maxHeight: (width - theme.sizes.padding * 2.4 - theme.sizes.base) / 2
  }
});


import { Ionicons } from '@expo/vector-icons';

const categories = [
  {
    id: "repair",
    name: "Repair",
    tags: ["services", "car"],
    count: 147,
    icon: <Ionicons name="construct-outline" size={24} color="black" />
  },
  {
    id: "color_change",
    name: "Color Change",
    tags: ["services", "car"],
    count: 16,
    icon: <Ionicons name="brush-outline" size={24} color="black" />
  },
  {
    id: "car_wash",
    name: "Car Wash",
    tags: ["services", "car"],
    count: 68,
    icon: <Ionicons name="sparkles-outline" size={24} color="black" />
  },
  {
    id: "oil_change",
    name: "Oil Change",
    tags: ["services", "car"],
    count: 17,
    icon: <Ionicons name="color-fill-outline" size={24} color="black" />
  },
  {
    id: "tire_service",
    name: "Tire Service",
    tags: ["services", "car"],
    count: 47,
    icon: <Ionicons name="help-buoy-outline" size={24} color="black" />
  },
  {
    id: "inspection",
    name: "Inspection",
    tags: ["services", "car"],
    count: 47,
    icon: <Ionicons name="briefcase-outline" size={24} color="black" />
  }
];

const products = [
  {
    id: 1,
    name: "16 Best Plants That Thrive In Your Bedroom",
    description:
      "Bedrooms deserve to be decorated with lush greenery just like every other room in the house – but it can be tricky to find a plant that thrives here. Low light, high humidity and warm temperatures mean only certain houseplants will flourish.",
    tags: ["Interior", "27 m²", "Ideas"]
  }
];

const explore = [
  // images
];

const profile = {
  username: "react-ui-kit",
  location: "Europe",
  email: "contact@react-ui-kit.com",
  budget: 1000,
  monthly_cap: 5000,
  notifications: true,
  newsletter: false
};

export { categories, explore, products, profile };
