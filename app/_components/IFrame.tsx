
export default function IFrame({src}: {src : string}) {
  return (
    <iframe src={src} width="1000" height="450" loading="lazy"></iframe>
  )
}
