--
-- PostgreSQL database dump
--

-- Dumped from database version 12.0 (Debian 12.0-2.pgdg100+1)
-- Dumped by pg_dump version 12.0 (Debian 12.0-2.pgdg100+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: applicants; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.applicants (
    "fName" text NOT NULL,
    "lName" text NOT NULL,
    email text NOT NULL,
    "resumeFile" text NOT NULL,
    "position" text NOT NULL,
    id integer NOT NULL,
    rejected boolean DEFAULT false NOT NULL
);


--
-- Name: applicants_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.applicants_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: applicants_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.applicants_id_seq OWNED BY public.applicants.id;


--
-- Name: positions; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.positions (
    "position" text NOT NULL,
    availible boolean DEFAULT true NOT NULL,
    id integer NOT NULL
);


--
-- Name: positions_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.positions_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: positions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.positions_id_seq OWNED BY public.positions.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    username text NOT NULL,
    password text NOT NULL,
    id integer NOT NULL
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: applicants id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.applicants ALTER COLUMN id SET DEFAULT nextval('public.applicants_id_seq'::regclass);


--
-- Name: positions id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.positions ALTER COLUMN id SET DEFAULT nextval('public.positions_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: applicants; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.applicants ("fName", "lName", email, "resumeFile", "position", id, rejected) FROM stdin;
Steve	Jobs	apple@purple.com	resumeFile-JobsSteve-1539175439804.rtf	Cyber Security Analyst	34	f
Harry	Potter	hp@purple.com	resumeFile-PotterHarry-1539175747701.rtf	Software Developer	36	f
Ronald	Weasley	rweasle@purple.com	resumeFile-WeasleyRonald-1539176001592.rtf	Cyber Security Analyst	42	f
Hermoine	Grainger	hg100@purple.com	resumeFile-GraingerHermoine-1539176231702.rtf	Manager	43	f
John	Doe	jdoe@purple.com	resumeFile-DoeJohn-1539115754478.rtf	Software Developer	19	f
Jane	Doe	janedoe@purple.com	resumeFile-DoeJane-1539115779805.rtf	Cyber Security Analyst	20	f
John	Smith	jsmith@purple.com	resumeFile-SmithJohn-1539115820674.rtf	Manager	21	f
Matt	Smith	msmith@purple.com	resumeFile-SmithMatt-1539115846007.rtf	Software Developer	22	f
John Jacob	Jingleheimer-Schmidt	jjjs@purple.com	resumeFile-Jingleheimer-SchmidtJohn Jacob-1539115897069.rtf	Software Developer	23	f
Michael	Scott	mscott@purple.com	resumeFile-ScottMichael-1539116850654.rtf	Manager	27	f
John	Doe	johndoe11@purple.com	resumeFile-DoeJohn-1539116904917.rtf	Cyber Security Analyst	28	f
Wesley	Reed	reedws@mailuc.edu	resumeFile-ReedWesley-1539116933914.rtf	Software Developer	29	f
The	Doctor	doctorwho@purple.com	resumeFile-DoctorThe-1539116989084.rtf	Manager	30	f
Matt	Doe	mdoe@purple.com	resumeFile-DoeMatt-1539117175740.rtf	Cyber Security Analyst	31	f
Jane	Smith	jsmith11d7@purple.com	resumeFile-SmithJane-1539117199314.rtf	Cyber Security Analyst	32	f
John	Smith III	js3@purple.com	resumeFile-Smith IIIJohn-1539175232191.rtf	Software Developer	33	f
\.


--
-- Data for Name: positions; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.positions ("position", availible, id) FROM stdin;
Software Developer	t	1
Cyber Security Analyst	t	2
Manager	t	3
Interior Decorator	f	4
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.users (username, password, id) FROM stdin;
test@email.com	$2b$10$u2j8m.t8txkQgoeGVgs89OZbaxbrpoE/EFI/HVria0.ACsfNQ29xG	1
\.


--
-- Name: applicants_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.applicants_id_seq', 43, true);


--
-- Name: positions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.positions_id_seq', 4, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 1, true);


--
-- Name: applicants applicants_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.applicants
    ADD CONSTRAINT applicants_pkey PRIMARY KEY (id);


--
-- Name: positions positions_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.positions
    ADD CONSTRAINT positions_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

