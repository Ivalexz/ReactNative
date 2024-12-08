import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, Button, TextInput, Image } from "react-native";
import { useState } from "react";

// task1
const Counter = () => {
  const [count, setCount] = useState(0);
  const Plus = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };
  const Minus = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <View>
      <Text style={styles.text}>Лічильник: {count}</Text>
      <View style={styles.buttons}>
        <Button title="+" onPress={Plus} />
        <Button title="-" onPress={Minus} />
      </View>
    </View>
  );
};

// task2
const TextChange = () => {
  const [text, setText] = useState("");
  return (
    <View>
      <TextInput
        placeholder="Введіть текст"
        onChangeText={(e) => setText(e)}
        style={styles.lables}
      ></TextInput>
      <Text style={styles.text}>Введений текст:</Text>
      <Text style={styles.text2}>{text}</Text>
    </View>
  );
};

// task3
const my_arr = ["white", "blue", "green"];
const ColorBackgr = () => {
  const [count, setCount] = useState(0);

  const Change = () => {
    if (count == 2) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  };
  return (
    <View style={[styles.colors, { backgroundColor: my_arr[count] }]}>
      <Button
        title="Змінити фон"
        onPress={Change}
        style={styles.button1}
      ></Button>
    </View>
  );
};

// task4
const AddEl = () => {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);
  const El = () => {
    if (text != "") {
      setList(list.concat(text));
      setText("");
    }
  };
  return (
    <View>
      <TextInput
        placeholder="Введіть текст"
        style={styles.lables}
        onChangeText={(e) => setText(e)}
        value={text}
      ></TextInput>
      <Button title="Додати" onPress={El}></Button>
      <Text style={styles.text}>Список:</Text>
      {list.map((item) => (
        <View style={styles.task}>
          <Text>{item}</Text>
        </View>
      ))}
    </View>
  );
};
//task5
const AddImg = () => {
  const [link, setLink] = useState("");
  const [img, setImg] = useState("");
  console.log(img);
  return (
    <View>
      <TextInput
        placeholder="Посилання"
        style={styles.lables}
        onChangeText={(e) => setLink(e)}
      ></TextInput>
      <Button title="Завантажити" onPress={() => setImg(link)}></Button>
      <Image
        style={styles.images}
        source={{
          uri: img,
        }}
      />
    </View>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Counter/> */}
      {/* <TextChange/> */}
      {/* <ColorBackgr/> */}
      {/* <AddEl/> */}
      <AddImg />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
    fontWeight: 900,
    fontSize: 20,
    width: 200,
  },
  text2: {
    textAlign: "center",
    fontSize: 20,
    width: 200,
  },
  buttons: {
    marginTop: 20,
    gap: 20,
  },
  lables: {
    width: 200,
    textAlign: "center",
    fontSize: 20,
  },
  colors: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  task: {
    borderColor: "black",
  },
  images: {
    marginTop: 20,
    width: 200,
    height: 200,
  },
});
