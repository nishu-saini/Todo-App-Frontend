import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import TodoItem from "../components/TodoItem";
import { Context, server } from "../main";

const Home = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const { isAuthenticated } = useContext(Context);

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const { data } = await axios.post(
        `${server}/task/new`,
        {
          title,
          description,
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      toast.success(data.message);
      setTitle("");
      setDescription("");
      setLoading(false);
      setRefresh((prev) => !prev);
    } catch (err) {
      toast.error(err.response.data.message);
      setTitle("");
      setDescription("");
      setLoading(false);
    }
  };

  useEffect(() => {
    axios
      .get(`${server}/task/mytasks`, {
        withCredentials: true,
      })
      .then((res) => {
        setTasks(res.data.tasks);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  }, [refresh]);

  const updateHandler = async (id) => {
    try {
      const { data } = await axios.put(
        `${server}/task/${id}`,
        {},
        {
          withCredentials: true,
        }
      );

      toast.success(data.message);
      setRefresh((prev) => !prev);
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };

  const deleteHandler = async (id) => {
    try {
      const { data } = await axios.delete(`${server}/task/${id}`, {
        withCredentials: true,
      });

      toast.success(data.message);
      setRefresh((prev) => !prev);
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };

  return (
    <div className="container">
      <div className="login">
        <section>
          <form onSubmit={submitHandler}>
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
            <button type="submit" disabled={loading}>
              Add Task
            </button>
          </form>
        </section>
      </div>

      <section className="todosContainer">
        {tasks.map((task) =>
          isAuthenticated ? (
            <TodoItem
              key={task._id}
              title={task.title}
              description={task.description}
              isCompleted={task.isCompleted}
              updateHandler={updateHandler}
              deleteHandler={deleteHandler}
              id={task._id}
            />
          ) : (
            <div></div>
          )
        )}
      </section>
    </div>
  );
};

export default Home;
