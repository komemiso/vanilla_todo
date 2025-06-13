import "/styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;

  document.getElementById("add-text").value = "";

  //li作成
  const li = document.createElement("li");

  const div = document.createElement("div");
  div.className = "task-list";

  const p = document.createElement("p");
  p.className = "task-item";
  p.innerText = inputText;

  const compliteButton = document.createElement("button");
  compliteButton.innerText = "完了";
  compliteButton.addEventListener("click", () => {
    //完了ボタンが押されたら完了のタスクに移動
    const compliteTarget = compliteButton.closest("li");
    compliteButton.nextElementSibling.remove();
    compliteButton.remove();
    const returnButton = document.createElement("button");
    returnButton.innerText = "戻す";
    compliteTarget.firstElementChild.appendChild(returnButton);
    document.getElementById("complited-list").appendChild(compliteTarget);

    returnButton.addEventListener("click", () => {
      const returnTarget = returnButton.closest("li");
      returnTarget.firstElementChild.appendChild(compliteButton);
      returnTarget.firstElementChild.appendChild(deleteButton);
      returnButton.remove();
      document.getElementById("imcomplite-list").appendChild(returnTarget);
    });
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //削除ボタンが押された時にタスクを削除
    const deleteTarget = deleteButton.closest("li");
    document.getElementById("imcomplite-list").removeChild(deleteTarget);
  });

  div.appendChild(p);
  div.appendChild(compliteButton);
  div.appendChild(deleteButton);
  li.appendChild(div);

  document.getElementById("imcomplite-list").appendChild(li);
};

document.getElementById("add-button").addEventListener("click", onClickAdd);
