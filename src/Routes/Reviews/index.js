import React, { Component } from "react";
import { Text, View, ScrollView } from "react-native";
import AllReviews from "./AllReviews/index";
import DraftsReviews from "./DraftsReviews/index";
import PublishedReviews from "./PublishedReviews/index";
import SentReviews from "./SentReviews/index";

import styles from "./styles";


class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
       allReviews :1,
      draftsReviews :2,
      sentReviews :3,
       publishedReviews :4,
      
   
    };
  }
  render() {
    return (
      <ScrollView>
        <View style={styles.mainContainer}>
          {this.state.allReviews =1 &&(
          <AllReviews/>
          )
          }
           {this.state.draftsReviews = 2 &&(
          <DraftsReviews/>
           )}

            {this.state.sentReviews =3 &&(
          <SentReviews/>
            )}
             {this.state.publishedReviews =4 &&(
          <PublishedReviews/>
             )}
        </View>
      </ScrollView>
    );
  }
}

export default index;
