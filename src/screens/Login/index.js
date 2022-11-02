import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

const initialValues = {
    userName: "",
    password: ""
}

const handleSubmit = () => {
    alert("Logned")
}

const validationSchema = Yup.object().shape({
    userName: Yup.string().required("Cannot be null"),
    password: Yup.string().required("Cannot be null")
})


const Login = () => {

    const [showPassword, setShowPassword] = useState(true)

  return (
    <SafeAreaView style={style.body}>
      <View style={style.header}>
        <Text style={style.title}>Sign In</Text>
      </View>

      <View style={style.logo_area}>
        <Image
          resizeMode={"contain"}
          source={require("../../../assets/images/home.png")}
        />
      </View>

      <View style={style.board}>
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
          {({ values, handleSubmit, handleChange, errors }) => (
            <View>
              <View style={style.item}>
                <TextInput value={values.userName} onChangeText={handleChange("userName")}
                 style={style.input} placeholder="Username" />
                 { (errors.userName) && <Text style={style.alert}>{errors.userName}</Text> }
              </View>
              <View style={style.item}>
                <TextInput value={values.password} onChangeText={handleChange("password")}
                secureTextEntry={showPassword}  style={style.input} placeholder="Password" />
                 { (errors.password) && <Text style={style.alert}>{errors.password}</Text> }

                <TouchableOpacity onPress={()=>setShowPassword(!showPassword)}
                  style={{ position: "absolute", right: 10, top: 15 }}
                >
                  <Ionicons
                    name={showPassword ? "eye-off-outline" : "eye-outline"}
                    size={20}
                    selectionColor="red"
                  />
                </TouchableOpacity>
              </View>
              <View style={[style.item, { alignItems: "flex-end" }]}>
                <TouchableOpacity>
                  <Text style={{ color: "#525464", fontSize: 16 }}>
                    Forgot your password?
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={style.item}>
                <TouchableOpacity style={style.button} onPress={handleSubmit}>
                  <Text style={style.button_text}>Login</Text>
                </TouchableOpacity>
              </View>
              <View
                style={[
                  style.item,
                  { alignItems: "center", justifyContent: "center" },
                ]}
              >
                <Text style={{ color: "#525464" }}>Or</Text>
              </View>
              <View style={style.social}>
                <TouchableOpacity style={style.social_item}>
                  <Ionicons name="logo-facebook" color={"#1877F2"} size={25} />
                </TouchableOpacity>
                <TouchableOpacity style={style.social_item}>
                  <Ionicons name="logo-twitter" color={"#1DA1F2"} size={25} />
                </TouchableOpacity>
                <TouchableOpacity style={style.social_item}>
                  <Ionicons name="logo-linkedin" color={"#0A66C2"} size={25} />
                </TouchableOpacity>
              </View>
              <View style={style.item}>
                <TouchableOpacity
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <Text
                    style={{
                      fontSize: 17,
                      fontWeight: "700",
                      color: "#525464",
                    }}
                  >
                    Don't have an account?
                    <Text style={{ color: "#FFB19D" }}> Sign up</Text>
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </Formik>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  body: {
    paddingTop: 20,
    backgroundColor: "white",
    flex: 1,
  },
  header: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "500",
    fontSize: 20,
    color: "#525464",
  },
  logo_area: {
    alignItems: "center",
    marginTop: 30,
  },
  board: {
    marginTop: 30,
    paddingHorizontal: 30,
  },
  item: {
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#F7F7F7",
    paddingVertical: 10,
    paddingHorizontal: 30,
    height: 50,
    borderWidth: 1,
    borderColor: "#B0B0C3",
  },
  button: {
    backgroundColor: "#20c3af",
    paddingVertical: 20,
    alignItems: "center",
  },
  button_text: {
    color: "white",
    fontSize: 17,
    textAlign: "center",
    fontWeight: "700",
  },
  social: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 35,
  },
  social_item: {
    padding: 10,
    width: 100,
    height: 60,
    borderWidth: 1,
    borderColor: "#E2E2E0",
    justifyContent: "center",
    alignItems: "center",
  },
  alert: {
    color:"red",
    fontSize:15
}
});

export default Login;
