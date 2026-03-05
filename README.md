1/ What is JSX, and why is it used?
JSX মানে হলো JavaScript XML . JSX দিয়ে খুব সহজে JavaScript এর মধ্যে HTML এর মতো করে code করা যাই। ফলে react apps এর ui বানানো খুব সহজ হয়ে যাই। 

2/ What is the difference between State and Props?

State হলো কোনো component এর নিজের data যা ওই component থেকেই change করা যাই। আর props হলো parent থেকে child এ আসা data যা শুধুমাত্র parent থেকেই change করা যাই। 

3/ What is the useState hook, and how does it work?
useState হুক হলো react এর একটি বহুলব্যবহ্রত hook. যা ব্যবহার করা হয় component এর state manage করার জন্য।
 useState hook এ থাকে একটা state এবং একটা state set করার function. আর শুরুতে state এর একটা value দেওয়া থাকে। state set করার function দিয়ে state এর value change করতে হয়। 

 4/ How can you share state between components in React?
React এ state এক components থেকে অন্য componets এ নিতে চাইলে প্রথমে state কে তাদের parent component এ নিতে হবে তার পর সেখান থেকে children হিসাবে অন্য component এ use করতে হবে। 

5/ How is event handling done in React?
React এ event handling করা হয় camelCase event name ব্যবহার করে এবং function এর মাধ্যমে।