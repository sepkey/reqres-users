import CardCompact from '../components/card-compact';
import SignInForm from '../features/auth/ui/sign-in-form';

export default function SignIn() {
  return <CardCompact content={<SignInForm />} title='Sign In' />;
}
