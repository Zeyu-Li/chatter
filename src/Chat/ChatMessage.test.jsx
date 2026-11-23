import { render, screen } from '@testing-library/react';
import { ChatMessage } from './ChatMessage';

vi.mock('./../Firebase/Firebase', () => ({ currentUser: () => ({ id: 'me' }) }));

test('renders message text and username as text, not HTML', () => {
  const text = '<img src=x onerror="window.pwned=true">';
  const { container } = render(
    <ChatMessage message={{ text, uuid: 'someone-else', username: '<script>alert(1)</script>' }} />
  );
  expect(screen.getByText(text, { exact: false })).toBeInTheDocument();
  expect(container.querySelector('img, script')).toBeNull();
});
