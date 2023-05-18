import axios from "axios";

export default {
  state: {
    todos: []
  },
  getters: {
    myTodos(state) {
      return state.todos;
    },
  },
  mutations: {
    setTodos(state, todos) {
      state.todos = todos;
    },
    addToDo(state, newTodo) {
      state.todos.unshift(newTodo);
    },
    deleteTodo(state, id) {
      state.todos = state.todos.filter((todo) => todo.id != id);
    }
  },
  actions: {
    async getTodos({ commit }) {
      let res = await axios.get('https://jsonplaceholder.typicode.com/todos');
      let todos = res.data;
      commit('setTodos', todos);
    },
    async addTodo({ commit }, newTodo) {

      let res = await axios.post('https://jsonplaceholder.typicode.com/todos', newTodo);
      commit('addToDo', res.data);
    },
    async deleteTodo({ commit }, id) {
      await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
      commit('deleteTodo', id);
    }
  }
}
/*
1.todoos ဆိုတဲ့ state တစ်ခုသတ်မှတ်တယ်
2.getters မှာကျတော့ အဲ့ကောင်က ပြန်ပြမှာ သူမှာ ကြိုက်တဲ့ function ရေးလို့ရတယ် ဒါမဲ့ firstParameter က state ဖြစ်တယ် state ဆိုတာက အပေါ်က state ဖြစ်တယ်
3.mutations ဆိုတာက ပြောင်းလဲတဲ့တန်ဖိုးတွေကို သတ်မှတ်တဲ့ကောင် တနည်းအားဖြင့်ပွဲစား တစ်ခုခုပြောင်းလဲမယ်ဆိုရင် သူထဲက function တွေကိုခေါ်ရတယ်
သူ့မှာ parameter နှစ်ခုလက်ခံတယ် state နဲ့ todos 
state ဆိုတာက အပေါ်ကကောင် todos ဆိုတာက commit ပေးလိုက်ရင် တန်ဖိုးထည့်လိုက်တဲ့ကောင်ကိုပြန်ခေါ်တာ 
4.actions သူက get / post / put / အစရှိတာကိုလုပ်ပေးမဲ့ကောင်ပါ 
သူ့မှာ firstparameter က context ဆိုတဲ့ object ပါ ဒါမဲ့ဒီမှာက destruction အနေနဲ့ commit ပဲယူထားပါတယ် အဲ့ကောင်က commit ပေးလိုက်တာပါ သတ်ဆိုင်ရာ mutataion ကို

ဒါပါပဲ 
*/