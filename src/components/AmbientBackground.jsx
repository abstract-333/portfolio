export function AmbientBackground() {
  return (
    <div className="ambient" aria-hidden="true">
      <div className="ambient__orb ambient__orb--neptune" />
      <div className="ambient__orb ambient__orb--pluto" />

      <div className="ambient__right">
        <div className="ambient__deep-haze" />
        <div className="ambient__atmosphere" />
        <div className="ambient__orbit ambient__orbit--outer" />
        <div className="ambient__orbit ambient__orbit--inner" />
        <div className="ambient__wisp ambient__wisp--1" />
        <div className="ambient__wisp ambient__wisp--2" />
        <div className="ambient__star ambient__star--1" />
        <div className="ambient__star ambient__star--2" />
        <div className="ambient__star ambient__star--3" />
      </div>

      <div className="ambient__scanlines" />
      <div className="ambient__grain" />
    </div>
  )
}
