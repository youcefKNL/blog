import React, { useState } from "react";

const BashTerminal = () => {
  const [terminalOutput, setTerminalOutput] = useState("");
  const [terminalInput, setTerminalInput] = useState("");
  const commandList = ["cat", "clear", "help", "ls", "man", "ps"];
  const ls = "list all files in the current directory.";
  const help = "list possible terminal commands.";
  const cat = "cat [filename] will print the contents of that file.";
  const clear = "clear all text in the terminal.";
  const reverse = "reverse to the previous section of the page.";
  const man = "describe a file, but you know that already don't you?";
  const ps = "list the current processes";
  const aboutTxt =
    "This is an experiment to see how much of the linux terminal can be replicated using only JavaScript/jQuery/Pug/Css.";
  const projectsTxt =
    "Ubuntu is a Debian-based Linux operating system for personal computers, tablets and smartphones, where Ubuntu Touch edition is used. It also runs network servers. That is usually with the Ubuntu Server edition, either on physical or virtual servers (such as on mainframes) or with containers, that is with enterprise-class features. It runs on the most popular architectures, including server-class ARM-based.";
  const loremIpsumTxt =
    "In publishing and graphic design, lorem ipsum is a filler text or greeking commonly used to demonstrate the textual elements of a graphic document or visual presentation. Replacing meaningful content with placeholder text allows designers to design the form of the content before the content itself has been produced.";
  const files = ["about.txt", "projects.txt"];
  const allFiles = ["about.txt", "projects.txt", "loremipsum.txt"];
  const user = "root@user:~$ ";
  const commandHistory = [];
  let commandIndex = -1;

  const sendCommand = (input) => {
    const command = input.split(" ")[0];
    const secondary = input.split(" ")[1];
    let output = terminalOutput;

    if (
      commandList.indexOf(command) === -1 &&
      command !== "continue" &&
      command
    ) {
      output += `Invalid command "${command}"<br>type "help" for more options<br>`;
      setTerminalOutput(output);
      return;
    }

    if (
      input === "ls -la" ||
      input === "ls -a" ||
      input === "ls -all" ||
      input === "ls -l"
    ) {
      printAllFiles();
      return;
    }

    switch (command) {
      case "ls":
        printFiles();
        break;
      case "cat":
        if (!secondary) break;
        printFile(secondary);
        break;
      case "help":
        printList(commandList);
        break;
      case "clear":
        clearTerminal();
        break;
      case "man":
        if (secondary) man(secondary);
        break;
      case "ps":
        output +=
          "PID TTY&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TIME CMD<br>" +
          "6258 pts/1&nbsp;&nbsp;    00:00:00 bash<br>" +
          "7334 pts/1&nbsp;&nbsp;    00:00:00 ps<br>" +
          "8942 pts/1&nbsp;&nbsp;    00:00:00 " +
          currentBrowser() +
          "<br>";
        setTerminalOutput(output);
        break;
    }
  };

  const printFile = (file) => {
    let output = terminalOutput;
    if (window[file]) {
      output += window[file] + "<br>";
    } else {
      output +=
        '"' + file + '"' + ' is an invalid file name.  Try typing "ls".<br>';
    }
    setTerminalOutput(output);
  };

  const printList = (list) => {
    let output = terminalOutput;
    list.forEach(function (result) {
      output += result + "<br>";
    });
    setTerminalOutput(output);
  };

  const printFiles = () => {
    let output = terminalOutput;
    files.forEach(function (file) {
      output += file + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
    });
    output += "<br>";
    setTerminalOutput(output);
  };

  const printAllFiles = () => {
    let output = terminalOutput;
    allFiles.forEach(function (file) {
      output += file + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
    });
    output += "<br>";
    setTerminalOutput(output);
  };

  const currentBrowser = () => {
    var is_chrome = navigator.userAgent.indexOf("Chrome") > -1;
    var is_explorer = navigator.userAgent.indexOf("MSIE") > -1;
    var is_firefox = navigator.userAgent.indexOf("Firefox") > -1;
    var is_safari = navigator.userAgent.indexOf("Safari") > -1;
    var is_edge = navigator.userAgent.indexOf("Edge") > -1;
    var is_opera = navigator.userAgent.toLowerCase().indexOf("op") > -1;
    if (is_chrome && is_safari && is_edge) {
      is_chrome = false;
      is_safari = false;
    } else if (is_chrome && is_safari) {
      is_safari = false;
    } else if (is_chrome && is_opera) {
      is_chrome = false;
    }
    if (is_chrome) {
      return "Chrome";
    } else if (is_explorer) {
      return "Internet Explorer";
    } else if (is_firefox) {
      return "Firefox";
    } else if (is_safari) {
      return "Safari";
    } else if (is_edge) {
      return "Edge";
    } else if (is_opera) {
      return "Opera";
    } else {
      return "Browser";
    }
  };

  const clearTerminal = () => {
    setTerminalOutput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      sendCommand(terminalInput);
      commandHistory.unshift(terminalInput);
      commandIndex = -1;
      setTerminalInput("");
    }
  };

  const handleInputChange = (e) => {
    setTerminalInput(e.target.value);
  };

  return (
    <div id="terminal">
      <div
        id="terminalOutput"
        dangerouslySetInnerHTML={{ __html: terminalOutput }}
      ></div>
      <div>
        {user}
        <input
          id="terminalInput"
          spellCheck="false"
          value={terminalInput}
          onKeyDown={handleKeyDown}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default BashTerminal;
