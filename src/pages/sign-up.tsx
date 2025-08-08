import CardCompact from '../components/card-compact';
import SignUpForm from '../features/auth/ui/sign-up-form';

export default function SignUp() {
  return <CardCompact content={<SignUpForm />} title='Sign In' />;
}
