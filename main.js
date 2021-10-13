const layout = [
    [['Backquote',  '`', '~', 'ё', 'Ё',],
      ['Digit1', '1', '!', '1', '!'],
      ['Digit2', '2', '\'', '2', '@'],
      ['Digit3', '3', '№', '3', '#'],
      ['Digit4', '4', ';', '4', '$'],
      ['Digit5', '5', '%', '5', '%'],
      ['Digit6', '6', ':', '6', '^'],
      ['Digit7', '7', '?', '7', '&'],
      ['Digit8', '8', '*', '8', '*'],
      ['Digit9', '9', '(', '9', '('],
      ['Digit0', '0', ')', '0', ')'],
      ['Minus', '-', '_', '-', '_'],
      ['Equal', '=', '+', '=', '+'],
      ['Backspace', 'Backspace', 'Backspace', 'Backspace', 'Backspace'],
    ],
    [
      ['Tab', 'Tab', 'Tab', 'Tab', 'Tab'],
      ['KeyQ', 'q', 'Q', 'й', 'Й'],
      ['KeyW', 'w', 'W', 'ц', 'Ц',],
      ['KeyE', 'e', 'E', 'у', 'У',],
      ['KeyR', 'r', 'R', 'к', 'К',],
      ['KeyT', 't', 'T', 'е', 'Е',],
      ['KeyY', 'y', 'Y', 'н', 'Н',],
      ['KeyU', 'u', 'U', 'г', 'Г',],
      ['KeyI', 'i', 'I', 'ш', 'Ш',],
      ['KeyO', 'o', 'O', 'щ', 'Щ',],
      ['KeyP', 'p', 'P', 'з', 'З', ],
      ['BracketLeft', '[', '{', 'х', 'Х',],
      ['BracketRight', ']', '}', 'ъ', 'Ъ'],
      ['Backslash', '\\', '/', '\\', '|'],
      ['Delete', 'Del', 'Del', 'Del', 'Del'],
    ],
    [
      ['CapsLock', 'CapsLock', 'CapsLock', 'CapsLock', 'CapsLock', 'CapsLock'],
      ['KeyA', 'a', 'A', 'ф', 'Ф'],
      ['KeyS', 's', 'S', 'ы', 'Ы'],
      ['KeyD', 'd', 'D', 'в', 'В'],
      ['KeyF', 'f', 'F', 'а', 'А'],
      ['KeyG', 'g', 'G', 'п', 'П'],
      ['KeyH', 'h', 'H', 'р', 'Р'],
      ['KeyJ', 'j', 'J', 'о', 'О'],
      ['KeyK', 'k', 'K', 'л', 'Л'],
      ['KeyL', 'l', 'L', 'д', 'Д'],
      ['Semicolon', ';', ':', 'ж', 'Ж'],
      ['Quote', '\'', '\'', 'э', 'Э'],
      ['Enter', 'Enter', 'Enter', 'Enter', 'Enter'],
    ],
    [
      ['ShiftLeft', 'Shift', 'Shift', 'Shift', 'Shift'],
      ['KeyZ', 'z', 'Z', 'я', 'Я'],
      ['KeyX', 'x', 'X', 'ч', 'Ч'],
      ['KeyC', 'с', 'С', 'c', 'C'],
      ['KeyV', 'v', 'V', 'м', 'М'],
      ['KeyB', 'b', 'B', 'и', 'И'],
      ['KeyN', 'n', 'N', 'т', 'Т'],
      ['KeyM', 'm', 'M', 'ь', 'Ь'],
      ['Comma', '.', '<', 'б', 'Б'],
      ['Period', ',', '>', 'ю', 'Ю'],
      ['Slash', '.', ',', '/', '?'],
      ['ArrowUp', '▲', '▲', '▲', '▲'],
      ['ShiftRight', 'Shift', 'Shift', 'Shift', 'Shift'],
    ],
    [
      ['ControlLeft', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'],
      ['MetaLeft', 'Win', 'Win', 'Win', 'Win'],
      ['AltLeft', 'Alt', 'Alt', 'Alt', 'Alt'],
      ['Space', ' ', ' ', ' ', ' '],
      ['AltRight', 'Alt', 'Alt', 'Alt', 'Alt'],
      ['ArrowLeft', '◄', '◄', '◄', '◄'],
      ['ArrowDown', '▼', '▼', '▼', '▼'],
      ['ArrowRight', '►', '►', '►', '►'],
      ['ControlRight', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'],
    ],
  ];
  
  const ContentWrapper = document.createElement('div'); 
  const textArea = document.createElement('textarea');
  const keyBoard = document.createElement('div');

  
  ContentWrapper.className = 'ContentWrapper';
  textArea.id = 'textArea';
  keyBoard.className = 'keyBoard';

  let lang = 'rus';
  let capslock = false;

  ContentWrapper.append(textArea);
  ContentWrapper.append(keyBoard);

  for (let i = 0; i < layout.length; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    for (let j = 0; j < layout[i].length; j++) {
      const key = document.createElement('div');
      key.classList.add('key');
      key.classList.add(layout[i][j][0]);
  
      key.insertAdjacentHTML('afterBegin',
        `<div class='rus'>
            <span class='caseDown '>${layout[i][j][1]}</span>
            <span class='caseUp hidden'>${layout[i][j][2]}</span>
          </div>
          <div class='eng hidden'>
            <span class='caseDown hidden'>${layout[i][j][3]}</span>
            <span class='caseUp hidden'>${layout[i][j][4]}</span>
          </div>`);
      row.appendChild(key);
    }
    keyBoard.appendChild(row);
  }
  
  const addActiveElement = (elem) => elem.classList.add('active');
  const removeActiveElement = (elem) => elem.classList.remove('active');

  const changeCase = () => {
    const langElem = keyBoard.querySelectorAll(`div > .${lang}`);
    for (let i = 0; i < langElem.length; i++) {
      langElem[i].querySelectorAll('span')[0].classList.toggle('hidden');
      langElem[i].querySelectorAll('span')[1].classList.toggle('hidden');
    }
  };

  const changeLang = () => {
    const prevLang = keyBoard.querySelectorAll(`div > .${lang}`);
    for (let i = 0; i < prevLang.length; i++) {
      prevLang[i].classList.toggle('hidden');
      prevLang[i].querySelectorAll('span')[0].classList.toggle('hidden');
    }
    if (lang === 'eng') {
      lang = 'rus';
      localStorage.setItem('lang', lang);
    } else {
      lang = 'eng';
      localStorage.setItem('lang', lang);
    }
    const nextLang = keyBoard.querySelectorAll(`div > .${lang}`);
    for (let i = 0; i < nextLang.length; i += 1) {
      nextLang[i].classList.toggle('hidden');
      nextLang[i].querySelectorAll('span')[0].classList.toggle('hidden');
    }
  };
  
  function asincron(func, milliseconds) {
    let lastCall = 0;
    return function () {
      const now = Date.now();
      if (lastCall + milliseconds < now) {
        lastCall = now;
        return func.apply(this, arguments);
      }
    };
  }

  document.addEventListener('keydown', asincron((e) => {
    const elem = keyBoard.getElementsByClassName(e.code)[0];
    switch (e.code) {
      case 'MetaLeft':
        break;

      case 'Tab':
        addActiveElement(elem);
        textArea.value += '    ';
        break;

      case 'Enter':
        addActiveElement(elem);
        textArea.value += '\n';
        break;

      case 'CapsLock':
        if (capslock) {
          removeActiveElement(elem);
          capslock = false;
        } else {
          addActiveElement(elem);
          capslock = true;
        }
        changeCase();
        break;

       case 'Backspace':
        textArea.value = textArea.value.substr(0, textArea.value.length - 1);
        addActiveElement(elem);
        break;


      case 'Delete':
        addActiveElement(elem);
        break;


      case 'ControlLeft':
        e.preventDefault();
        addActiveElement(elem);
        changeLang();
        break;
       
      case 'ShiftLeft':
      case 'ShiftRight':
        addActiveElement(elem);
        changeCase();
        break;
        
      default:
        addActiveElement(elem);
        textArea.value += elem.querySelectorAll(':not(.hidden)')[1].textContent;
        break;
    }
  }, 10));
  
  keyBoard.addEventListener('mousedown', (e) => {
    const elem = e.target.closest('.key');
    switch (elem.classList[1]) {
      case 'Tab':
        addActiveElement(elem);
        textArea.value += ' ';
        break;


      case 'Enter':
        addActiveElement(elem);
        textArea.value += '\n';
        break;


      case 'Delete':
        addActiveElement(elem);
        break;


      case 'Backspace':
        addActiveElement(elem);
        textArea.value = textArea.value.substr(0, textArea.value.length - 1);
        break;


      case 'CapsLock':
        addActiveElement(elem);
        if (capslock) {
          removeActiveElement(elem);
          capslock = false;
        } else {
          addActiveElement(elem);
          capslock = true;
        }
        changeCase();
        break;


      case 'ControlLeft':
        e.preventDefault();
        addActiveElement(elem);
        changeLang();
        break;

      default:
        addActiveElement(elem);
        textArea.value += elem.querySelectorAll(':not(.hidden)')[1].textContent;
        break;
    }
  });
  
  document.addEventListener('mouseup', (e) => {
    const elem = e.target.closest('.key');
    switch (elem.classList[1]) {
      case 'ShiftLeft':
      case 'ShiftRight':
        removeActiveElement(elem);
        changeCase();
        break;

      case 'CapsLock':
        if (capslock !== true) {
          removeActiveElement(e.target.closest('.key'));
        } else {
          addActiveElement(e.target.closest('.key'));
        }
        break;
      default:
        removeActiveElement(elem);
        break;
    }
  });
  
  document.addEventListener('keyup', (e) => {
    const elem = keyBoard.getElementsByClassName(e.code)[0];
    removeActiveElement(elem);
  });

  document.body.append(ContentWrapper);


   