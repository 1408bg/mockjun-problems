const { start, add, end } = context;
const func = answer(); 

// 사이클 감지 테스트를 위한 10개의 데이터셋 (n: 노드 수, edges: 간선 목록)
const args = [
  { n: 3, edges: ["a b", "b c", "c a"] },       // 1. 단순 사이클 (T)
  { n: 3, edges: ["a b", "b c"] },             // 2. 선형 구조 (F)
  { n: 4, edges: ["a b", "b c", "c d", "a d"] }, // 3. 사각형 사이클 (T)
  { n: 2, edges: ["a b"] },                    // 4. 최소 연결 (F)
  { n: 4, edges: ["a b", "a c", "a d"] },       // 5. 스타형 구조 (F)
  { n: 4, edges: ["a b", "b c", "a c", "c d"] }, // 6. 삼각형 포함 사이클 (T)
  { n: 1, edges: [] },                         // 7. 단일 노드 (F)
  { n: 5, edges: ["a b", "b c", "c d", "d e"] }, // 8. 긴 경로 (F)
  { n: 2, edges: ["a b", "b a"] },             // 9. 양방향/중복 사이클 (T)
  { n: 5, edges: ["a b", "c d", "d e", "e c"] }  // 10. 떨어진 컴포넌트 내 사이클 (T)
];

const answers = ["T", "F", "T", "F", "F", "T", "F", "F", "T", "T"];

start();

for (let i = 0; i < args.length; i++) {
  // func(n, edges) 형태로 인자 전달
  const result = func(args[i].n, args[i].edges);
  add(result === answers[i]);
}

end();