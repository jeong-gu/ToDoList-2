export default function TodoTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
    // 스타일은 최소화: 기본 레이아웃만 div로 감쌈
    return <div className="TodoTemplate">{children}</div>

}