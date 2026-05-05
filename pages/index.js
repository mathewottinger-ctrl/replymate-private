export default function Home() {
  return (
    <div style={{
      background:"#000",
      color:"#fff",
      minHeight:"100vh",
      padding:"40px",
      fontFamily:"Arial"
    }}>
      <h1>ReplyMate</h1>
      <p>Your private AI assistant is now live.</p>

      <button style={{
        padding:"12px 20px",
        background:"#fff",
        color:"#000",
        border:"none",
        borderRadius:"8px",
        cursor:"pointer"
      }}>
        Start
      </button>
    </div>
  )
}
