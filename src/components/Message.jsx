function Message({ children }) {
  return (
    <p className="text-sm mt-12 md:text-base md:mt-20">
      <span>👋🏼 </span>
      {children}
    </p>
  );
}

export default Message;
