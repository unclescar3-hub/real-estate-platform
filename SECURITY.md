# Security Policy

## Reporting Security Issues

We take security seriously. If you discover a security vulnerability, please email **security@realestate.com** instead of using the public issue tracker.

**Please do not publicly disclose security issues until they have been addressed.**

Include the following in your report:

- Description of the vulnerability
- Location of the vulnerability (file path, line numbers)
- Potential impact
- Steps to reproduce (if applicable)
- Your contact information

We will acknowledge receipt of your report within 48 hours and provide updates on our progress towards a fix.

## Security Practices

### Authentication & Authorization

- ✅ All passwords are hashed with bcrypt
- ✅ JWT tokens have expiration times
- ✅ Role-based access control (RBAC) enforced
- ✅ Protected API endpoints require authentication
- ✅ Rate limiting on authentication endpoints

### Data Protection

- ✅ HTTPS required in production
- ✅ Sensitive data encrypted at rest
- ✅ SQL injection prevention via parameterized queries
- ✅ XSS protection with input validation
- ✅ CSRF token validation

### Dependencies

- ✅ Regular dependency audits: `npm audit`
- ✅ Automated security updates
- ✅ No use of deprecated packages
- ✅ Pinned major versions in package-lock.json

### Environment

- ✅ Secrets not committed to repository
- ✅ `.env.example` shows required variables only
- ✅ Production credentials separate from code
- ✅ Docker secrets for containerized deployments

## Security Checklist

Before deploying to production:

- [ ] All npm dependencies audited
- [ ] Environment variables configured securely
- [ ] HTTPS enabled
- [ ] Rate limiting configured
- [ ] CORS properly restricted
- [ ] Input validation implemented
- [ ] Security headers set (Helmet.js)
- [ ] Database backups configured
- [ ] Logging configured
- [ ] Error handling doesn't leak sensitive info
- [ ] Database credentials secured
- [ ] API keys rotated
- [ ] Firewall rules configured

## Vulnerability Disclosure Timeline

1. **Day 1**: Issue reported
2. **Day 2-3**: Acknowledgment and initial assessment
3. **Day 7**: Target fix date communicated
4. **Day 14**: Fix completed and patch released
5. **Day 15**: Public disclosure and CVE assignment

## Security Updates

We release security updates as soon as possible. Always keep dependencies updated:

```bash
npm update
npm audit fix
```

## OWASP Top 10 Compliance

This project follows OWASP Top 10 guidelines:

1. **Injection** - Parameterized queries, input validation
2. **Broken Authentication** - JWT, password hashing
3. **Sensitive Data Exposure** - Encryption, HTTPS
4. **XML External Entities** - No XML parsing
5. **Broken Access Control** - RBAC implementation
6. **Security Misconfiguration** - Secure defaults
7. **XSS** - Input sanitization, output encoding
8. **Insecure Deserialization** - Strict JSON parsing
9. **Using Components with Known Vulnerabilities** - Dependency audits
10. **Insufficient Logging & Monitoring** - Comprehensive logging

## Incident Response

If a vulnerability is exploited:

1. Isolate affected systems
2. Assess scope of breach
3. Notify affected users
4. Apply emergency patch
5. Conduct post-mortem analysis
6. Implement preventive measures

## Third-Party Security

- [ ] Only use trusted npm packages
- [ ] Verify package integrity
- [ ] Check package downloads/reputation
- [ ] Review package source code
- [ ] Monitor for abandoned packages

## Additional Resources

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Node.js Security Best Practices](https://nodejs.org/en/docs/guides/security/)
- [NIST Cybersecurity Framework](https://www.nist.gov/cyberframework)
- [CWE Top 25](https://cwe.mitre.org/top25/)

---

**Last Updated**: 2026-05-16
